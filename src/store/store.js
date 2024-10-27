import { create } from 'zustand'

const useStore = create((set) => ({
  tableData: [],
  originalTableData:[],
  updateTableData: (data) => set({ tableData: data }),
  updateOriginalTableData: (data) => set({ originalTableData: data }),
}))

export default useStore;