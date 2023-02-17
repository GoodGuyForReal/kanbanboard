import { addDoc, collection, updateDoc } from "firebase/firestore"
import { db } from "../Firebase"

const defultImg = 'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
const FirebaseCreateProject = async (user, projectName, imgUrl, setDocId) => {
    const defultProjectStart = {
        projectname: projectName,
        projectlogo: imgUrl || defultImg,
        createddate: new Date().getTime(),
    }

    const collectionRef = collection(db, 'users', user?.uid, 'projects')
    const docRef = await addDoc(collectionRef, defultProjectStart)
    await setDocId(docRef.id)
    await updateDoc(docRef, { projectid: docRef.id })

    return docRef
}

export default FirebaseCreateProject