// import _ from 'lodash'
const _ = require('lodash')

const cvplInfos = [
  { cvplNo: '22-1003', rceptDt: '20220701' },
  { cvplNo: '22-1001', rceptDt: '20220701' },
  { cvplNo: '22-1015', rceptDt: '20220702' },
  { cvplNo: '22-1011', rceptDt: '20220702' },
  { cvplNo: '22-1007', rceptDt: '20220701' },
  { cvplNo: '22-1022', rceptDt: '20220702' },
  { cvplNo: '22-1021', rceptDt: '20220702' },
  { cvplNo: '22-1008', rceptDt: '20220701' },
  { cvplNo: '22-1002', rceptDt: '20220701' },
  { cvplNo: '22-1010', rceptDt: '20220702' },
]

// 민원번호 (년도-일련번호)
// 민원번호 기준으로 정렬한 다음, 접수일자별로 Grouping
const groupInfo = _.chain(cvplInfos)
  .sortBy('cvplNo')
  .groupBy((obj) => obj.rceptDt)
  .value()
// console.log(groupInfo)

const keys = _.keys(groupInfo)
// console.log(keys)

// GroupId와 index 설정
// 민원번호가 연속적인 숫자로 된 경우 맨 첫번째 민원번호를 기준으로 하여
// 순서대로 index를 지정한다. index는 1부터 시작
function setIndexByCvplNo(arrCvplInfo) {
  for (let i = 0; i < arrCvplInfo.length; i++) {
    const cvplNo = parseInt(String(arrCvplInfo[i].cvplNo).split('-')[1])
    // console.log(cvplNo)

    if (i === 0) {
      arrCvplInfo[i].groupCvplNo = String(cvplNo)
      arrCvplInfo[i].index = 1
    } else {
      const befCvplNo = parseInt(
        String(arrCvplInfo[i - 1].cvplNo).split('-')[1]
      )
      arrCvplInfo[i].groupCvplNo =
        cvplNo - 1 === befCvplNo
          ? arrCvplInfo[i - 1].groupCvplNo
          : String(cvplNo)
      arrCvplInfo[i].index =
        cvplNo - 1 === befCvplNo ? arrCvplInfo[i - 1].index + 1 : 1
    }
  }
}

for (let i = 0; i < keys.length; i++) {
  setIndexByCvplNo(groupInfo[keys[i]])
}
// console.log(groupInfo)

const cvplInfos2 = _.flatMapDeep(groupInfo)
// console.log(cvplInfos2)

const groupInfo2 = _.groupBy(cvplInfos2, 'groupCvplNo')
const keys2 = _.keys(groupInfo2)

function getCvplInfo(arrCvplInfo) {
  let rslt = ''
  if (arrCvplInfo.length <= 2) {
    rslt =
      arrCvplInfo[0].rceptDt +
      '(' +
      _.chain(arrCvplInfo)
        .map((obj) => obj.cvplNo)
        .join() +
      ')'
  } else {
    for (let i = 0; i < arrCvplInfo.length; i++) {
      if (i === 0) {
        rslt = arrCvplInfo[i].rceptDt + '(' + arrCvplInfo[i].cvplNo + '~'
      } else if (i === arrCvplInfo.length - 1) {
        rslt += arrCvplInfo[i].cvplNo + ')'
      }
    }
  }
  return rslt
}

// console.log(groupInfo2)
// console.log(keys2)

const result = []
for (let i = 0; i < keys2.length; i++) {
  result.push(getCvplInfo(groupInfo2[keys2[i]]))
}
console.log(_.join(result, '/'))
