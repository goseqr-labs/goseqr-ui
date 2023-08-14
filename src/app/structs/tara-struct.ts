export class TaraStruct {
  _id: string;
  organization_id: string;
  organization_name: string;
  userid: string;
  username: string
  assetname: string;
  attackroute: string;
  attackvector: string;
  availability: boolean;
  calvalue: number;
  confidentiality: boolean;
  damagescenario: string;
  impactlevel: number;
  integrity: boolean;
  risklevel: number;
  securitygoal: string;
  securitylevel: number;
  threatscenario: string;
  record_created_date: string;
  record_deleted_date: string;

  constructor(_id: string,
              assetname: string,
              attackvector: string,
              confidentiality: boolean,
              integrity: boolean,
              availability: boolean,
              threatscenario: string,
              damagescenario: string,
              attackroute: string,
              impactlevel: number,
              risklevel: number,
              securitylevel: number,
              calvalue: number,
              securitygoal: string
              ) {
    this._id = _id
    this.assetname = assetname
    this.attackvector = attackvector
    this.confidentiality = confidentiality
    this.integrity = integrity
    this.availability = availability
    this.threatscenario = threatscenario
    this.damagescenario = damagescenario
    this.attackroute = attackroute
    this.impactlevel = impactlevel
    this.risklevel = risklevel
    this.securitylevel = securitylevel
    this.calvalue = calvalue
    this.securitygoal = securitygoal
  }

  getRecord(): object {
    return {};
  }
}
