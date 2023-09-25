export class TaraStruct {
  _id: string;

  organization_id: string;
  organization_name: string;

  userid: string;
  username: string;

  assetname: string;
  attackroute: string;
  attackvector: string;
  availability: boolean;
  calvalue: number;
  confidentiality: boolean;
  damagescenario: string;

  safety: string;
  privacy: string;
  financial: string;
  operational: string;
  impactlevel: number;

  integrity: boolean;

  expertise: string;
  knowledge_about_item: string;
  elapsed_time_in_days: number;
  window_of_opportunity: string;
  equipment: string;
  feasibility_level: string;
  risklevel: number;

  securitygoal: string;

  threatscenario: string;
  record_created_date: string;
  record_deleted_date: string;

  constructor(_id: string,
              organization_id: string,
              organization_name: string,
              userid: string,
              username: string,
              assetname: string,
              attackvector: string,
              confidentiality: boolean,
              integrity: boolean,
              availability: boolean,
              threatscenario: string,
              damagescenario: string,
              safety: string,
              privacy: string,
              financial: string,
              operational: string,
              attackroute: string,
              impactlevel: number,
              expertise: string,
              knowledge_about_item: string,
              elapsed_time_in_days: number,
              window_of_opportunity: string,
              equipment: string,
              feasibility_level: string,
              risklevel: number,
              calvalue: number,
              record_created_date: string,
              record_deleted_date: string,
  ) {
    this._id = _id
    this.organization_id = organization_id
    this.assetname = assetname
    this.attackvector = attackvector
    this.confidentiality = confidentiality
    this.integrity = integrity
    this.availability = availability
    this.threatscenario = threatscenario
    this.damagescenario = damagescenario
    this.attackroute = attackroute
    this.safety = safety
    this.privacy = privacy
    this.financial = financial
    this.operational = operational
    this.impactlevel = impactlevel
    this.expertise = expertise
    this.knowledge_about_item = knowledge_about_item
    this.elapsed_time_in_days = elapsed_time_in_days
    this.window_of_opportunity = window_of_opportunity
    this.equipment = equipment
    this.feasibility_level = feasibility_level
    this.risklevel = risklevel
    this.calvalue = calvalue
    this.record_created_date = record_created_date
    this.record_deleted_date = record_deleted_date
  }

  getRecord(): object {
    return {};
  }
}
