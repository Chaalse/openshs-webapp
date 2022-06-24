type SimulationContextType = {
    id: number,
    description: 'weekday' | 'weekend'
}

type SimulationDateTimeType = {
    id: number,
    description: 'morning' | 'evening'
}

export type RunSettingsEntity = {
    Date: Date,
    DateTime: SimulationDateTimeType
    StartHour: Date,
    Context: SimulationContextType,
}