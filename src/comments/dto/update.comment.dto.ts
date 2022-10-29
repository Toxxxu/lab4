import { IsNotEmpty, IsString } from "class-validator";

export class UpdateCommentDto {
    @IsString({ message: "Title field is required!" })
    @IsNotEmpty()
    public text: string;
}