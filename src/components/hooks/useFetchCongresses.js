import { useEffect, useState } from 'react'

import firebase from '../../firebase'


function useFetchCongresses() {
  const [congresses, setCongresses] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    setLoading(true)

    const unsubscribe = firebase
      .firestore()
      .collection('congresses')
      .onSnapshot(snapshot => {
        const normalizedCongresses = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))

        setCongresses(normalizedCongresses)
        setLoading(false)
      })

    setLoading(false)
    return () => unsubscribe()
  }, [])

  return {
    congresses,
    loading
  }
}

export default useFetchCongresses