import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyD_wisdW9PvUwcu3eHsv0a0iQoqHK1qHEY',
  authDomain: 'surgicheck-dbs.firebaseapp.com',
  projectId: 'surgicheck-dbs',
  storageBucket: 'surgicheck-dbs.firebasestorage.app',
  messagingSenderId: '536969457690',
  appId: '1:536969457690:web:ef559c2e5f7bc658f3e1a3',
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const storage = getStorage(app)
