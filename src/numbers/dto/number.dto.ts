import { ApiProperty } from "@nestjs/swagger";
import {IsNumber} from 'class-validator';

export class NumberDto {
    @ApiProperty({example: 1, description: 'Number id'})
    @IsNumber()
    readonly id: number;

    @ApiProperty({example: 321, description: 'Number'})
    @IsNumber()
    readonly number: number;

    constructor(id: number, number: number ){
        this.id = id;
        this.number = number;
    }
}