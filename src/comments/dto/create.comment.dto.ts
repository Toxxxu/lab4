import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCommentDto {
    @IsInt()
    @IsNumber()
    public postId: number;
    @IsString({ message: "Title field is required!" })
    @IsNotEmpty()
    public text: string;
}