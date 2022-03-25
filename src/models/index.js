// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Address = {
  "STREET": "STREET",
  "DISTRICT": "DISTRICT",
  "HOME_NUMBER": "HOME_NUMBER",
  "CITY": "CITY",
  "COUNTRY": "COUNTRY"
};

const { Hospita, ECGRecord, SPO2Record, HeartRateRecord, UserInfo } = initSchema(schema);

export {
  Hospita,
  ECGRecord,
  SPO2Record,
  HeartRateRecord,
  UserInfo,
  Address
};