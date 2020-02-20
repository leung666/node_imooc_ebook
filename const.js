const env = require('./env')
let resUrl
let mp3FilePath
let dbHost
let dbUser
let dbPwd
if(env==='dev'){
    resUrl = 'http://192.168.1.107:8089';
    mp3FilePath = '/Users/liyongjie/Desktop/html/ebook/mp3';
    dbHost = 'localhost'
    dbUser = 'root'
    dbPwd = 'Pass1111'
}else if(env === 'prod'){
    resUrl = 'http://39.107.66.67:8089';
    mp3FilePath = '/root/nginx/upload/mp3';
    dbHost = '39.107.66.67'
    dbUser = 'root'
    dbPwd = 'Tya82Zl7knI0'
}
const category = [
    'Biomedicine',
    'BusinessandManagement',
    'ComputerScience',
    'EarthSciences',
    'Economics',
    'Engineering',
    'Education',
    'Environment',
    'Geography',
    'History',
    'Laws',
    'LifeSciences',
    'Literature',
    'SocialSciences',
    'MaterialsScience',
    'Mathematics',
    'MedicineAndPublicHealth',
    'Philosophy',
    'Physics',
    'PoliticalScienceAndInternationalRelations',
    'Psychology',
    'Statistics'
]
module.exports = {
    resUrl,
    category,
    mp3FilePath,
    dbHost,
    dbUser,
    dbPwd
}
