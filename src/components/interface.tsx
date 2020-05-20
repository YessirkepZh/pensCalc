export interface Request {
    Sex:string;
    BirthDate: string;
    Exp1998:string;
    ExpYear:string;
    AverageSal:string;
    EnlargeSal:boolean;
    EnlargeType:boolean;
    EnlargeTenge:string;
    EnlargePercent:string;
    PeriodPayOPV:string;
    OPV:boolean;
    SumOPV:string;
    OPPV:boolean;
    SumOPPV:string;
    DPV:boolean;
    SumDPV:string;
    SumDPVtype:boolean;
    SumDPVtenge:string;
    SumDPVpercent:string;
    PeriodPayDPV:string;
    PayoutAge:string;
    PayoutMonth:string;
    Lang:string;
    CalcType:string;
    email:string;
}
export interface Retirement {
    Dt: string;
    Age: string;
}

export interface PaymentBegin {
    Dt: string;
    Age: string;
}

export interface EnpfCalcTable {
    Year: string;
    Age: string;
    BasicPension: number;
    SolidarityPension: number;
    OPV: number;
    OPPV: number;
    DPV: number;
    Total: number;
    KoefZam: number;
    PensAnnuity: number;
}

export interface EnpfCalculatorRealist {
    Retirement: Retirement;
    PaymentBegin: PaymentBegin;
    NumOfYearsBeforeExhAccumOPV: string;
    NumOfYearsBeforeExhAccumOPPV: string;
    NumOfYearsBeforeExhAccumDPV: string;
    SolidarityPension: string;
    BasicPension: string;
    EnpfPensionOPV: string;
    EnpfPensionOPPV: string;
    EnpfPensionDPV: string;
    TotalSum: string;
    SalaryBeforePension: string;
    Koef: string;
    PensionAnnuity: string;
    EnpfCalcTable: EnpfCalcTable[];
}
export interface EnpfCalculatorOptimist {
    Retirement: Retirement;
    PaymentBegin: PaymentBegin;
    NumOfYearsBeforeExhAccumOPV: string;
    NumOfYearsBeforeExhAccumOPPV: string;
    NumOfYearsBeforeExhAccumDPV: string;
    SolidarityPension: string;
    BasicPension: string;
    EnpfPensionOPV: string;
    EnpfPensionOPPV: string;
    EnpfPensionDPV: string;
    TotalSum: string;
    SalaryBeforePension: string;
    Koef: string;
    PensionAnnuity: string;
    EnpfCalcTable: EnpfCalcTable[];
}
export interface EnpfCalculatorPessimist {
    Retirement: Retirement;
    PaymentBegin: PaymentBegin;
    NumOfYearsBeforeExhAccumOPV: string;
    NumOfYearsBeforeExhAccumOPPV: string;
    NumOfYearsBeforeExhAccumDPV: string;
    SolidarityPension: string;
    BasicPension: string;
    EnpfPensionOPV: string;
    EnpfPensionOPPV: string;
    EnpfPensionDPV: string;
    TotalSum: string;
    SalaryBeforePension: string;
    Koef: string;
    PensionAnnuity: string;
    EnpfCalcTable: EnpfCalcTable[];
}

export interface Response {
    EnpfCalculatorRealist: EnpfCalculatorRealist;
    EnpfCalculatorOptimist: EnpfCalculatorOptimist;
    EnpfCalculatorPessimist: EnpfCalculatorPessimist;
    PensionAnnuityAsk: string;
}


