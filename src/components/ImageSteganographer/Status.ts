export enum StatusType {
    Nothing = 'nothing',
    Success = 'success',
    Failure = 'failure',
}

export class Status {
    public readonly type: StatusType
    public readonly message: string
    constructor(type: StatusType, message: string) {
        this.type = type
        this.message = message
    }

    static nothing = () => new Status(StatusType.Nothing, '')
    static succeed = (message: string) => new Status(StatusType.Success, message)
    static fail = (message: string) => new Status(StatusType.Failure, message)
}
