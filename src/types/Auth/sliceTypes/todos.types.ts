export interface ITodo {
     _id: string,
     title: string,
     status: string,
     priority: string,
}

export interface ITodoResonse {
     success: boolean,
     message: string,
     totalCounts: number,
     count: number,
     data: ITodo[]
}

export interface ITodoInitialState {
     status: string,
     error: Error | null
     todos: ITodo[],
     totalCount: number,
     count: number,
}

export interface ITodoSeachOptions {
     searchTerm: string,
     page: number,
     limit: number
}