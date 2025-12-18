export const AGR_USERS = [
    { UNAME: 'BREADS', AGR_NAME: 'SAP_ALL', FROM_DAT: '2023-01-01', TO_DAT: '9999-12-31', DIRECT: 'X' },
    { UNAME: 'WALTER_W', AGR_NAME: 'Z_CHEMIST_PRO', FROM_DAT: '2023-05-15', TO_DAT: '2025-05-15', DIRECT: 'X' },
    { UNAME: 'JESSE_P', AGR_NAME: 'Z_LAB_ASSISTANT', FROM_DAT: '2023-06-01', TO_DAT: '9999-12-31', DIRECT: 'X' },
    { UNAME: 'GUSTAVO_F', AGR_NAME: 'SAP_HR_MANAGER', FROM_DAT: '2022-10-10', TO_DAT: '9999-12-31', DIRECT: ' ' },
    { UNAME: 'SAUL_G', AGR_NAME: 'Z_LEGAL_ADVISOR', FROM_DAT: '2024-01-20', TO_DAT: '2026-01-20', DIRECT: 'X' },
];

export const AGR_DEFINE = [
    { AGR_NAME: 'SAP_ALL', PARENT_AGR: '', CREATE_USR: 'SAP', CREATE_DAT: '2000-01-01' },
    { AGR_NAME: 'Z_CHEMIST_PRO', PARENT_AGR: 'Z_GLOBAL_SCIENCE', CREATE_USR: 'SYSTEM', CREATE_DAT: '2023-05-10' },
    { AGR_NAME: 'Z_LAB_ASSISTANT', PARENT_AGR: '', CREATE_USR: 'ADMIN_01', CREATE_DAT: '2023-05-30' },
    { AGR_NAME: 'Z_LEGAL_ADVISOR', PARENT_AGR: '', CREATE_USR: 'LAW_SEC', CREATE_DAT: '2024-01-15' },
];

export const AGR_TEXTS = [
    { AGR_NAME: 'SAP_ALL', TEXT: 'Super User Role - All Access' },
    { AGR_NAME: 'Z_CHEMIST_PRO', TEXT: 'Lead Chemist Authorization Group' },
    { AGR_NAME: 'Z_LAB_ASSISTANT', TEXT: 'Laboratory Junior Assistant' },
    { AGR_NAME: 'Z_LEGAL_ADVISOR', TEXT: 'Expert Legal Advisory Role' },
];

export const AGR_1251 = [
    { AGR_NAME: 'SAP_ALL', OBJECT: 'S_TCODE', AUTH: 'ALL', FIELD: 'TCD', VAL: '*' },
    { AGR_NAME: 'Z_CHEMIST_PRO', OBJECT: 'M_MATE_MAT', AUTH: 'C_PRO', FIELD: 'ACTVT', VAL: '03' },
    { AGR_NAME: 'Z_LAB_ASSISTANT', OBJECT: 'M_MATE_WRK', AUTH: 'LAB_W', FIELD: 'WERKS', VAL: '1000' },
];

export const AGR_1252 = [
    { AGR_NAME: 'Z_CHEMIST_PRO', OBJECT: 'S_TABU_DIS', VARBL: 'WERKS', LOW: '1000', HIGH: '1010' },
    { AGR_NAME: 'Z_LAB_ASSISTANT', OBJECT: 'S_TABU_DIS', VARBL: 'BUKRS', LOW: 'US01' },
];

export const AGR_PROF = [
    { AGR_NAME: 'SAP_ALL', PROFILE: 'P_SAP_ALL', PTEXT: 'Generated Profile for SAP_ALL' },
    { AGR_NAME: 'Z_CHEMIST_PRO', PROFILE: 'T_CP_001', PTEXT: 'Chemistry Lab Control Profile' },
];

export const UST04 = [
    { BNAME: 'BREADS', PROFILE: 'SAP_ALL' },
    { BNAME: 'WALTER_W', PROFILE: 'Z_CHEM_P' },
    { BNAME: 'JESSE_P', PROFILE: 'Z_LAB_A' },
    { BNAME: 'SAUL_G', PROFILE: 'Z_LEGAL' },
];

export const STATS = [
    { title: 'Total Roles', value: '1,240', trend: 12, color: '#e31e24' },
    { title: 'Active Users', value: '450', trend: 5, color: '#c4191d' },
    { title: 'Critical Auth', value: '28', trend: -2, color: '#ff4d4d' },
    { title: 'New Requests', value: '15', trend: 20, color: '#e31e24' },
];
