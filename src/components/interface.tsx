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
};
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

export interface Result{
    code:string;
    message:string;
}
export let inputObj= {
    Sex:"M",
    BirthDate:"12.12.1970",
    Exp1998:"2.00",
    ExpYear:"12.00",
    AverageSal:"122222",
    EnlargeSal:"false",
    EnlargeType:"true",
    EnlargeTenge:"0",
    EnlargePercent:"0",
    PeriodPayOPV:"12",
    OPV:"true",
    SumOPV:"2000000",
    OPPV:"false",
    SumOPPV:"0",
    DPV:"true",
    SumDPV:"1231231",
    SumDPVtype:"false",
    SumDPVtenge:"10000",
    SumDPVpercent:"0",
    PeriodPayDPV:"1",
    PayoutAge:"66",
    PayoutMonth:"60000",
    Lang:"0",
    CalcType:"1",
    email:""
   }

export const outputObj = {
    EnpfCalculatorRealist:{
        Retirement: {
        Dt: '',
        Age: '',
        },
        PaymentBegin: {
        Dt: '',
        Age: '',
        },
        NumOfYearsBeforeExhAccumOPV: '',
        NumOfYearsBeforeExhAccumOPPV: '',
        NumOfYearsBeforeExhAccumDPV: '',
        SolidarityPension: '',
        BasicPension: '',
        EnpfPensionOPV: '',
        EnpfPensionOPPV: '',
        EnpfPensionDPV: '',
        TotalSum: '',
        SalaryBeforePension: '',
        Koef: '',
        PensionAnnuity: '',
        EnpfCalcTable: [],
    },
    EnpfCalculatorOptimist:{
        Retirement: {
        Dt: '',
        Age: '',
        },
        PaymentBegin: {
        Dt: '',
        Age: '',
        },
        NumOfYearsBeforeExhAccumOPV: '',
        NumOfYearsBeforeExhAccumOPPV: '',
        NumOfYearsBeforeExhAccumDPV: '',
        SolidarityPension: '',
        BasicPension: '',
        EnpfPensionOPV: '',
        EnpfPensionOPPV: '',
        EnpfPensionDPV: '',
        TotalSum: '',
        SalaryBeforePension: '',
        Koef: '',
        PensionAnnuity: '',
        EnpfCalcTable: [], 
    },
    EnpfCalculatorPessimist:{
        Retirement: {
            Dt: '',
            Age: '',
        },
        PaymentBegin: {
            Dt: '',
            Age: '',
        },
        NumOfYearsBeforeExhAccumOPV: '',
        NumOfYearsBeforeExhAccumOPPV: '',
        NumOfYearsBeforeExhAccumDPV: '',
        SolidarityPension: '',
        BasicPension: '',
        EnpfPensionOPV: '',
        EnpfPensionOPPV: '',
        EnpfPensionDPV: '',
        TotalSum: '',
        SalaryBeforePension: '',
        Koef: '',
        PensionAnnuity: '',
        EnpfCalcTable: [],
    }
   }

