import Swal from 'sweetalert2'
// import { Loading, Success } from '@/Utilities/Loading'
// import { Loading, Success } from '@/../../src/Utilities/Loading'
import { deleteAxiosAuth, errorResponse, getAxiosAuth, getAxiosAuthBlob, patchAxiosAuth, postAxiosAuth } from './axios'
// import { saveAs } from 'file-saver'

// assests
import alert from '@/../public/images/icons/advertament.svg'
import { Loading, Success } from '@../../../src/Utilities/Loading'

export function GetData (url, setData, setLoading) {
  const resThen = (res) => setData(res.data)
  const resFinal = () => setLoading(false)

  getAxiosAuth(url, resThen, errorResponse, resFinal)
}

export function PostData (url, form, setData, setLoading) {
  const resThen = (res) => setData(res.data)
  const resFinal = () => setLoading(false)

  postAxiosAuth(url, form, resThen, errorResponse, resFinal)
}

export function DeleteColumn (id, url, column, setData) {
  const resThen = (res) => {
    setData((data) => {
      const newData = { data: data.data }
      if (newData.data.content) {
        const index = newData.data.content.findIndex(e => e?.uuid ? e?.uuid === id : e?.id === id)
        if (index !== -1) {
          newData.data.content.splice(index, 1)
          return newData
        }
      } else {
        const index = newData.data.findIndex(e => e?.uuid ? e?.uuid === id : e?.id === id)
        if (index !== -1) {
          newData.data.splice(index, 1)
          return newData
        }
      }
    })
    Success(`Se elimino ${column}`, 'El registro se elimino de forma correcta')
    setTimeout(() => {
      Swal.close()
    }, 2000)
  }

  Swal.fire({
    title: `¿Estas seguro que desea eliminar ${column}?`,
    showDenyButton: true,
    iconHtml: `<img src="${alert.src}" style="width: 60px;height: 60px;" >`,
    confirmButtonText: 'Eliminar',
    denyButtonText: 'Cancelar',
    customClass: {
      title: 'titleModal',
      popup: 'fontFamily'
    }
  }).then((result) => {
    if (result.isConfirmed) {
      deleteAxiosAuth(url, resThen, errorResponse)
    } else if (result.isDenied) {
      Swal.close()
    }
  })
}

export function DeleteColumnMethod (id, url, row, setData, setValues) {
  const resThen = (res) => {
    setValues()
    setData((data) => {
      const newData = [...data]
      const index = newData.findIndex(e => e.uuid === id)
      if (index !== -1) {
        newData.splice(index, 1)
        return newData
      }
    })
    Success(`Se elimino ${row}`, 'El registro se elimino de forma correcta')
    setTimeout(() => {
      Swal.close()
    }, 2000)
  }

  Swal.fire({
    title: `¿Estas seguro que desea eliminar ${row}?`,
    iconHtml: `<img src="${alert.src}" style="width: 60px;height: 60px;" >`,
    showDenyButton: true,
    confirmButtonText: 'Eliminar',
    denyButtonText: 'Cancelar',
    customClass: {
      title: 'titleModal',
      popup: 'fontFamily'
    }
  }).then((result) => {
    if (result.isConfirmed) {
      deleteAxiosAuth(url, resThen, errorResponse)
    } else if (result.isDenied) {
      Swal.close()
    }
  })
}

export function ChangeStatusColumn (url, id, setData, msgSuccess) {
  Loading('Cambiando estatus')
  const resThen = (res) => {
    Success('Se realizo el cambio con exito', msgSuccess && `El registro se ${msgSuccess} de forma correcta`)
    setTimeout(() => {
      setData((data) => {
        const copy = { data: data.data }
        // se valida si la infomracion de la api tiene la estructura de content
        if (copy.data.content) {
          const findIndex = copy.data.content.findIndex(e => e?.uuid ? e?.uuid === id : e?.id === id)
          copy.data.content[findIndex].enable = !copy.data.content[findIndex].enable
          copy.data.content[findIndex].status = !copy.data.content[findIndex].status
          return copy
        } else {
          const findIndex = copy.data.findIndex(e => e?.uuid ? e?.uuid === id : e?.id === id)
          copy.data[findIndex].enable = !copy.data[findIndex].enable
          copy.data[findIndex].status = !copy.data[findIndex].status
          return copy
        }
      })
      Swal.close()
    }, 2000)
  }

  patchAxiosAuth(url, resThen, errorResponse)
}

export function ChangeStatusColumnPost (url, id, setData) {
  Loading('Cambiando estatus')
  const resThen = (res) => {
    Success('Se realizo el cambio con exito')
    setTimeout(() => {
      setData((data) => {
        const copy = { data: data.data }
        const findIndex = copy.data.findIndex(e => e?.uuid ? e?.uuid === id : e?.id === id)
        copy.data[findIndex].enable = !copy.data[findIndex].enable
        return copy
      })
      Swal.close()
    }, 2000)
  }

  postAxiosAuth(url, null, resThen, errorResponse)
}

export function DownloadExcel (url, nameExcel) {
  const resThen = (res) => {
    if (res.data) {
      const blob = new Blob([res.data], { type: 'application/vnd.ms-excel' })
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = nameExcel
      link.click()
    }
  }
  getAxiosAuthBlob(url, resThen, errorResponse)
}
