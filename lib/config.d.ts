import { Schema } from 'koishi';
export declare const usage: string;
export interface Config {
    groupListmapping: any;
    loggerinfo: any;
    speaker: string;
    sdp_ratio: number;
    noise: number;
    noisew: number;
    length: number;
    prompt: string;
    weight: number;
}
export declare const Config: Schema<Config>;
export declare const inject: {
    optional: string[];
};
