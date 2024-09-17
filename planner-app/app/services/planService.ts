import { DataI, PlanI } from '@/types'
import { getAll, addRecord, getById, getWithFilters} from './servicesUtils';


const urlString = "plans"

export async function getAllPlans(): Promise<DataI<PlanI>> {
    return getAll(urlString)
}
  
export async function getPlans(filters: Record<string, any>): Promise<DataI<PlanI>> {
    return getWithFilters(urlString, filters)
}

export async function getPlanById(id: string): Promise<PlanI | null> {
    return getById(urlString, id) 
}

export async function addPlan(Plan: PlanI): Promise<PlanI> {
    return addRecord(urlString, Plan)
}