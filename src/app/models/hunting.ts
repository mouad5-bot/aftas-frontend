export class HuntingClass implements IHunting{
  constructor(
    public fishWeight?: number,
    public fishId?: number,
    public memberNum?: number,
    public competitionCode?: string
  ) { }
}

export interface IHunting{
   fishWeight?: number,
   fishId?: number,
   memberNum?: number,
   competitionCode?: string
}
