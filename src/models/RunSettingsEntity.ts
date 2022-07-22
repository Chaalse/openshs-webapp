type SimulationContextType = {
    id: number,
    description: 'weekday' | 'weekend'
}

type SimulationDateTimeType = {
    id: number,
    description: 'morning' | 'evening'
}

export type RunSettingsEntity = {
    date: Date,
    dateTime: 'morning' | 'evening'
    startHour: Date,
    context: 'weekday' | 'weekend',
}