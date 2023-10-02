export interface Auditable {
  createdAt?: Date;
  createdBy?: string | number;
  updatedAt?: Date;
  updatedBy?: string | number;
}

export abstract class AuditableClass implements Auditable {
  readonly createdAt?: Date;
  readonly createdBy?: string | number;
  readonly updatedAt?: Date;
  readonly updatedBy?: string | number;

  constructor(entity: Auditable) {
    this.createdAt = entity.createdAt;
    this.createdBy = entity.createdBy;
    this.updatedAt = entity.updatedAt;
    this.updatedBy = entity.updatedBy;
  }
}
