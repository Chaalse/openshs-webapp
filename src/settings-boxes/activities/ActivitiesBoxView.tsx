import React, { FC, MouseEvent, ReactNode, useState } from "react";
import './ActivitiesBoxView.scss';
import 'material-icons/iconfont/material-icons.scss';
import Icon from "../../Components/Icon/Icon";

enum OptionsTabs {
    ACTIVITIES = 'activities',
    CONTEXTS = 'contexts',
    COLUMNS = 'columns',
    OBTR_LEVELS = 'levels'
}

type ActivitiesBoxViewProps = {
    activityLabels: string[],
    handleSubmitLabels: (labels: string[], tab?: OptionsTabs) => void
}

const ActivitiesBoxView: FC<ActivitiesBoxViewProps> = ({
    activityLabels,
    handleSubmitLabels
}) => {

    const [counter, setCounter] = useState(1);

    const markedTexts = (text: string, colorClass?: string): React.ReactNode => {
        if (colorClass!) {
            return (<b className={colorClass}>{text}</b>)
        } else {
            return (<b><i>{text}</i></b>)
        }
    }

    const handleAddField = () => {
        const div = document.createElement('div');
        div.setAttribute("class", "added-field")
        div.setAttribute("id", `added-field-${counter}`)

        const field = document.createElement('input');
        field.setAttribute("placeholder", "Activity name");
        field.setAttribute("id", `added-input-${counter}`);
        const btn = document.createElement('button');
        btn.setAttribute("class", "field-btn field-btn__remove");
        btn.setAttribute("onClick", "handleRemoveField");
        btn.setAttribute("id", `${counter}`);
        btn.onclick = handleRemoveField;

        const span = document.createElement('span');
        span.setAttribute("class", "material-icons-outlined");
        span.textContent = 'remove';

        btn.appendChild(span);

        div.appendChild(field);
        div.appendChild(btn);

        document.getElementById('fieldArray')!.appendChild(div)
        document.getElementById(`added-input-${counter}`)?.focus({ preventScroll: false });

        setCounter(counter + 1);
        return
    }

    const handleRemoveField = (e: any) => {
        const div = document.getElementById('fieldArray')!;
        const element = document.getElementById(`added-field-${counter}`)!
        div.removeChild(element);
        setCounter(counter - 1);
    }

    const handleGenerateCode = () => {
        let userLabels: string[] = [];
        const inputs = document.getElementsByTagName('input');
        for (let i = 0; i < inputs.length; i++) {
            const element = inputs.item(i);
            if (element!.value !== '') {
                userLabels.push(element!.value);
            }
        }
        handleSubmitLabels(userLabels);

    }

    const renderPythonCode = (): React.ReactNode => {

        return (
            <div className={'code-textbox'}>
                {activityLabels.map((label) => {
                    let variableDeclaration: string = `self.${label}_btn `;
                    let functionCall: string = 'bgui.FrameButton(';
                    let parameterFrame: string = 'self.frame';
                    let parameterText: string = 'text';
                    let parameterSize: string = 'size';
                    let parameterPos: string = 'pos';
                    let parameterEndFunction: string = ')';
                    return (
                        <div className={'lines lines__in-code'}>

                            <p>{markedTexts(variableDeclaration, 'variable_code')}</p>
                            <p>={markedTexts(functionCall, 'function_code')}</p>
                            <p>{markedTexts(parameterFrame, 'variable_code')},&nbsp;</p>
                            <p>{markedTexts(parameterText, 'variable_code')}{'='}</p>
                            <p>{`'${label}'`},&nbsp;</p>
                            <p>{markedTexts(parameterSize, 'variable_code')}{'=[0.1, 0.05]'},&nbsp;</p>
                            <p>{markedTexts(parameterPos, 'variable_code')}{'=[0.90, 0.65]'}</p>
                            <p>{markedTexts(parameterEndFunction, 'function_code')}</p>
                        </div>
                    )
                })
                }
            </div>
        )

    }

    return (
        <div className={'activities-container'}>
            <h1>How to customize activities</h1>
            <p>{`1. Set as many activities you want to add.`}</p>
            <p>{`2. Insert a name for each activity, this name will be shown in the button text.`}</p>
            <p>{`3. Generate the code and paste it in the `}{markedTexts('ui.py')}{` file, that is found in the `}{markedTexts('[simulator-root]/app/blender')}{' folder'}</p>
            <div className={'activities-div'}>
                <div className={'form-col'}>
                    <div className={'activities-form'} id={'fieldArray'}>

                        <div className={'added-field'} id={'added-field-0'}>
                            <input placeholder={'Activity name'} />
                            <button className={'field-btn field-btn__add'} onClick={handleAddField}><Icon icon={'add'} /></button>
                        </div>
                    </div>
                    <button className={'generate-button'} onClick={handleGenerateCode}>Generate code<Icon icon={'source'} /></button>
                </div>
                <div className={'code-box'}>
                    <div className={'code-container'}>
                        <div className={'code-textbox code-textbox__line-numbers'}>
                            <span className={'lines lines__numbers'}>
                                {1}
                            </span>
                            {activityLabels.map((element, index) => {
                                return (
                                    <span className={'lines lines__numbers'}>
                                        {index + 2}
                                    </span>
                                )
                            })}
                        </div>
                        {
                            renderPythonCode()
                        }
                    </div>
                    <button className={'copy-btn'}>Copy to Clipboard <Icon icon={'content_copy'} /></button>
                </div>
            </div>
        </div>
    )
}

export default ActivitiesBoxView;