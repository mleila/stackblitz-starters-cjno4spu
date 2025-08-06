import { env } from "process";

export function getPageId(){
    return env.NEXT_PUBLIC_GROWNOMIC_PAGE_ID;
}