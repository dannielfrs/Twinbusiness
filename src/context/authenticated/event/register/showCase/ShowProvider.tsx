import { useEffect, useState } from 'react'
import { ShowContext } from './ShowContext'
// import { SubmitHandler, FieldValues, set } from 'react-hook-form'
// import { useRouter } from 'next/navigation'
// import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
// import { getBanner, setBanner } from '@/services/axios/authenticated/events/register/showCase/showCase'
// import { postCatalogsService } from '@/services/axios/authenticated/general/general'

// const prefix = '/system'

export const ShowProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {

  // const router = useRouter()
  const [data, setData] = useState({})

  useEffect(() => {
    getReview()
  }, [])

  const getReview = async () => {
    // try {
    //   const form = new FormData()
    //   const response = await getBanner()
    //   setData(response)
    // } catch (error: any) {
    //   alertError('Error', error)
    //   setSendReviewFailed(true)
    // } finally {
    //   setLoading(false)
    // }
  }
  
  const setReview = async (img: File) => {
    // try {
    //   const form = new FormData()
    //   form.append('banner', img)
    //   const response = await setBanner(form)
    //   return response;
    //   setSendReviewCompleted(true)
    // } catch (error: any) {
    //   alertError('Error', error)
    //   setSendReviewFailed(true)
    // } finally {
    //   setLoading(false)
    // }
  }

  return (
    <ShowContext.Provider value={{
      data,
      getReview,
      setReview,
    }}>
      {children}
    </ShowContext.Provider>
  )
}
