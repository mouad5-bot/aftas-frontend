export class Competition {
  code?: string;
  date!: Date;
  startTime!: string;
  endTime!: string;
  numberOfParticipants!: number;
  location!: string;
  amountOfFish!: number;

  constructor(
    code?: string,
    date?: Date,
    startTime?: string,
    endTime?: string,
    numberOfParticipants?: number,
    location?: string,
    amountOfFish?: number
  ) {
    this.code = code;
    this.date = date || new Date();
    this.startTime = startTime || '';
    this.endTime = endTime || '';
    this.numberOfParticipants = numberOfParticipants || 0;
    this.location = location || '';
    this.amountOfFish = amountOfFish || 0;
  }
}
