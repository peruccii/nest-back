export type ProjectProps = {
  id?: number;
  name: string;
  status?: Status;
  started_at?: Date,
  created_at?: Date;
  updated_at?: Date;
};

export type Status = {
  id?: number;
  name: string;
};

export class Project {
  private id: number;
  private props: ProjectProps;

  private constructor(props: ProjectProps) {
    this.props = props;
  }

  public static create(props: ProjectProps): Project {
    return new Project(props);
  }

  getId(): number {
    return this.props.id;
  }

  getName(): string {
    return this.props.name;
  }

  getStatus(): Status {
    return this.props.status;
  }

  get created_at(): Date {
    return this.props.created_at;
  }
  get started_at(): Date {
    return this.props.created_at;
  }
  get updated_at(): Date {
    return this.props.updated_at;
  }

  setName(value: string) {
    this.props.name = value;
  }

  setStatus(value: Status) {
    this.props.status = value;
  }

  setId(value: number) {
    this.props.id = value
  }

  public toString(): string {
    return JSON.stringify({ id: this.id, ...this.props });
  }
  public toJSON() {
    return { id: this.id, ...this.props };
  }
}
