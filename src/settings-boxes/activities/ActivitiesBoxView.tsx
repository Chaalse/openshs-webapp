import React, { FC, MouseEvent, ReactNode, useEffect, useState } from "react";
import './ActivitiesBoxView.scss';
import 'material-icons/iconfont/material-icons.scss';
import Icon from "../../Components/Icon/Icon";
import { OptionsTabs, TabIdentifiers } from "./ActivitiesBoxDataContainer";



type ActivitiesBoxViewProps = {
    activityLabels: string[],
    handleSubmitLabels: (labels: any) => void,
    markedTexts: (value: string, colorClass?: string) => React.ReactNode,
    renderPythonButtons: (tab?: TabIdentifiers) => React.ReactNode
    renderPythonSignals: (tab?: TabIdentifiers) => React.ReactNode
}

const ActivitiesBoxView: FC<ActivitiesBoxViewProps> = ({
    activityLabels,
    handleSubmitLabels,
    markedTexts,
    renderPythonButtons,
    renderPythonSignals
}) => {

    const comment1 = '#This are the lines to add the buttons';
    const comment2 = '#This are the lines to set the signals'

    const [counter, setCounter] = useState(1);

    const [tabIdentifier, setTabIdentifier] = useState<TabIdentifiers>(TabIdentifiers.ACTIVITIES);

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

    const handleRemoveField = () => {
        const div = document.getElementById('fieldArray')!;
        const element = document.getElementById(`added-field-${counter}`)!
        div.removeChild(element);
        setCounter(counter - 1);
    }

    const handleGenerateCode = () => {
        const inputs = document.getElementsByTagName('input');

        handleSubmitLabels(inputs);

    }

    const handleChangeTab = (e: any) => {
        const inputs = document.getElementsByTagName('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs.item(i)!.value = '';
        }

        switch (e.target.id) {
            case OptionsTabs.ACTIVITIES:
                setTabIdentifier(TabIdentifiers.ACTIVITIES);
                break;
            case OptionsTabs.OBTR_LEVELS:
                setTabIdentifier(TabIdentifiers.OBTR_LEVELS);
                break;
            default:
                break;
        }

        handleGenerateCode();
    }

    const onCopyToClipboard = () => {
        const copiedDiv = document.getElementById('code-textbox');
        const text = copiedDiv!.textContent!;
        navigator.clipboard.writeText(text);

    }

    let lineNumbers: string[] = [];
    const handleRenderLineNumbers = () => {
        const pythonDiv = document.getElementById('python-div');
        let codeLines;
        if (pythonDiv !== null) {
            codeLines = pythonDiv!.getElementsByTagName('p');
            const max = codeLines ? codeLines.length : 6;
            for (let i = 0; i < max; i++) {
                lineNumbers.push('');
            }
        }

    }

    useEffect(() => {
        handleRenderLineNumbers();
    }, [document]);

    return (
        <div className={'activities-container'}>
            <h1>How to customize activities</h1>
            <p className={'instructions'}>{`1. Set as many activities you want to add.`}</p>
            <p className={'instructions'}>{`2. Insert a name for each activity, this name will be shown in the button text.`}</p>
            <p className={'instructions'}>{`3. Generate the code and paste it in the `}{markedTexts('ui.py')}{` file, that is found in the `}{markedTexts('[simulator-root]/app/blender')}{' folder'}</p>
            <div className={'activities-div'}>
                <div className={'form-col'}>
                    <div className={'activities-form'} id={'fieldArray'}>

                        <div className={'added-field'} id={'added-field-0'}>
                            <input placeholder={'Activity name'} />
                            <button className={'field-btn'} onClick={handleAddField}><Icon icon={'add'} /></button>
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
                            {activityLabels.map((line, index) => {

                                return (
                                    <span className={'lines lines__numbers'}>
                                        {index + 2}
                                    </span>
                                )

                            })
                            }
                            <span className={'lines lines__numbers'}>
                                {activityLabels.length + 2}
                            </span>
                            {activityLabels.map((line, index) => {

                                return (
                                    <span className={'lines lines__numbers'}>
                                        {activityLabels.length + index + 3}
                                    </span>
                                )

                            })
                            }

                        </div>
                        <div className={'code-textbox__inside'}>
                            <div className={'tabs-container'}>
                                <span
                                    className={`tab ${tabIdentifier === TabIdentifiers.ACTIVITIES ? 'selected' : ''}`}
                                    id={OptionsTabs.ACTIVITIES}
                                    onClick={(e) => handleChangeTab(e)}
                                >
                                    Activities
                                </span>
                                <span
                                    className={`tab ${tabIdentifier === TabIdentifiers.OBTR_LEVELS ? 'selected' : ''}`}
                                    id={OptionsTabs.OBTR_LEVELS}
                                    onClick={(e) => handleChangeTab(e)}
                                >
                                    Obstrusivity
                                </span>
                                <span className={'tab-container-background'}></span>
                            </div>
                            <div className={'code-textbox'} id={'code-textbox'}>
                                <div className={'lines lines__in-code'}>
                                    <p>{markedTexts(comment1, 'comment_code')}{'\n'}</p>
                                </div>
                                {
                                    renderPythonButtons(tabIdentifier)
                                }
                                <div className={'lines lines__in-code'}>
                                    <p>{markedTexts(comment2, 'comment_code')}{'\n'}</p>
                                </div>
                                {
                                    renderPythonSignals(tabIdentifier)
                                }
                            </div>
                        </div>
                    </div>
                    <button className={'copy-btn'} onClick={onCopyToClipboard}>Copy to Clipboard <Icon icon={'content_copy'} /></button>
                </div>
            </div>
        </div>
    )
}

export default ActivitiesBoxView;