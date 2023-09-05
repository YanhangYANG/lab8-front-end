import type { AxiosInstance, AxiosResponse } from "axios"
import type { OrgItem } from "@/type"
import axios from "axios";

const apiClient: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    // 其他的配置项
});

export default {
    getOrg(perPage : number,page:number): Promise<AxiosResponse<OrgItem[]>> {
        return apiClient.get < OrgItem[] > ('/orgs?_limit=' + perPage + '&_page=' + page)
    },
    getOrgById(id: number): Promise<AxiosResponse<OrgItem>> {
        return apiClient.get < OrgItem > ('/orgs/' + id.toString())
    }
}