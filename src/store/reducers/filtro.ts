import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Tarefa'

type FiltroState = {
  termo?: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (State, action: PayloadAction<FiltroState>) => {
      State.criterio = action.payload.criterio
      State.valor = action.payload.valor
    }
  }
})

export const { alterarTermo, alterarFiltro } = filtroSlice.actions

export default filtroSlice.reducer
