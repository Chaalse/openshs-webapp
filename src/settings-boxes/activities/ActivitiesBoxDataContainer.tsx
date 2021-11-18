import { FC, useState } from "react";
import ActivitiesBoxView from "./ActivitiesBoxView";

export enum OptionsTabs {
    ACTIVITIES = 'activities',
    CONTEXTS = 'contexts',
    COLUMNS = 'columns',
    OBTR_LEVELS = 'levels'
}

export enum TabIdentifiers {
    ACTIVITIES = 1,
    OBTR_LEVELS = 2,
}

type ActivityBoxProps = {

}

const ActivitiesBoxDataContainer: FC<ActivityBoxProps> = ({}) => {

    const [userLabels, setUserLabels] = useState<string[]>([]);

    const handleSubmitLabels = (inputs: any) =>{
        let labels: string[] = [];
        for (let i = 0; i < inputs.length; i++) {
            const element = inputs.item(i);
            if (element!.value !== '') {
                labels.push(element!.value);
            }
        }
        setUserLabels(labels);
        return
    }

    const markedTexts = (text: string, colorClass?: string): React.ReactNode => {
        if (colorClass!) {
            return (<b className={colorClass}>{text}</b>)
        } else {
            return (<b><i>{text}</i></b>)
        }
    }

    const renderPythonButtons = (tab?: TabIdentifiers): React.ReactNode => {

        return (
            <>
                {userLabels.map((label, index) => {
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
                            <p>{markedTexts(parameterFrame, 'variable_code')},{' '}</p>
                            <p>{markedTexts(parameterText, 'variable_code')}{'='}</p>
                            <p>{`'${label}'`},{' '}</p>
                            <p>{markedTexts(parameterSize, 'variable_code')}{'=[0.1, 0.05]'},{' '}</p>
                            <p>{markedTexts(parameterPos, 'variable_code')}{tab === TabIdentifiers.ACTIVITIES ? `=[0.90, ${(0.95-(0.05*index)).toFixed(2)}]` : `=[0.90, ${(0.55-(0.05*index)).toFixed(2)}]`}</p>
                            <p>{markedTexts(parameterEndFunction, 'function_code')}{'\n'}</p>

                        </div>
                    )
                })
                }
            </>
        )

        

    }

    const renderPythonSignals = (tab?: number) => {

        return (
            <>
                {userLabels.map((label)=>{
                    let variableDeclaration: string = `self.${label}_btn.on_click` ;
                    let signalReference = `self.`;
                    let signallCall = `set_${tab === TabIdentifiers.ACTIVITIES ? 'activity' : 'label'}_click`;

                    return (

                        <div className={'lines lines__in-code'}>
                            <p>{markedTexts(variableDeclaration, 'variable_code')}=</p>
                            <p>{markedTexts(signalReference, 'variable_code')}</p>
                            <p>{markedTexts(signallCall, 'function_code')}{'\n'}</p>

                        </div>
                    )
                })
                }
            </>
        )
    }

    return (
        <ActivitiesBoxView
            activityLabels={userLabels}
            handleSubmitLabels={handleSubmitLabels}
            markedTexts={markedTexts}
            renderPythonButtons={renderPythonButtons}
            renderPythonSignals={renderPythonSignals}
        />
    )
}

export default ActivitiesBoxDataContainer