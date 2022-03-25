import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Address {
  STREET = "STREET",
  DISTRICT = "DISTRICT",
  HOME_NUMBER = "HOME_NUMBER",
  CITY = "CITY",
  COUNTRY = "COUNTRY"
}



type HospitaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ECGRecordMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SPO2RecordMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HeartRateRecordMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserInfoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Hospita {
  readonly id: string;
  readonly name?: string;
  readonly phon?: (string | null)[];
  readonly address?: (Address | null)[] | keyof typeof Address;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Hospita, HospitaMetaData>);
  static copyOf(source: Hospita, mutator: (draft: MutableModel<Hospita, HospitaMetaData>) => MutableModel<Hospita, HospitaMetaData> | void): Hospita;
}

export declare class ECGRecord {
  readonly id: string;
  readonly time?: string;
  readonly ecg?: string;
  readonly userinfoID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ECGRecord, ECGRecordMetaData>);
  static copyOf(source: ECGRecord, mutator: (draft: MutableModel<ECGRecord, ECGRecordMetaData>) => MutableModel<ECGRecord, ECGRecordMetaData> | void): ECGRecord;
}

export declare class SPO2Record {
  readonly id: string;
  readonly time?: string;
  readonly spo2?: number;
  readonly userinfoID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<SPO2Record, SPO2RecordMetaData>);
  static copyOf(source: SPO2Record, mutator: (draft: MutableModel<SPO2Record, SPO2RecordMetaData>) => MutableModel<SPO2Record, SPO2RecordMetaData> | void): SPO2Record;
}

export declare class HeartRateRecord {
  readonly id: string;
  readonly time?: string;
  readonly heart_rate?: number;
  readonly userinfoID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<HeartRateRecord, HeartRateRecordMetaData>);
  static copyOf(source: HeartRateRecord, mutator: (draft: MutableModel<HeartRateRecord, HeartRateRecordMetaData>) => MutableModel<HeartRateRecord, HeartRateRecordMetaData> | void): HeartRateRecord;
}

export declare class UserInfo {
  readonly id: string;
  readonly first_name?: string;
  readonly last_name?: string;
  readonly birthday?: string;
  readonly weight?: number;
  readonly height?: number;
  readonly is_male?: boolean;
  readonly phone?: string;
  readonly address?: Address | keyof typeof Address;
  readonly ECGRecords?: (ECGRecord | null)[];
  readonly SPO2Records?: (SPO2Record | null)[];
  readonly HeartRateRecords?: (HeartRateRecord | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserInfo, UserInfoMetaData>);
  static copyOf(source: UserInfo, mutator: (draft: MutableModel<UserInfo, UserInfoMetaData>) => MutableModel<UserInfo, UserInfoMetaData> | void): UserInfo;
}