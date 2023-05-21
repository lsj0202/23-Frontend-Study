export default function TypeScript() {
  //타입추론
  let aaa: String = "안녕하세요"
  aaa = 3

  //타입명시
  let bbb: String = "반갑습니다"
  bbb = 10

  //타입명시가 필요한 상황
  let ccc: number | string = 1000
  ccc = "1000원"

  //숫자타입
  let ddd: number = 10
  ddd = 20

  //불린타입
  let eee: boolean = true
  eee = false
  eee = "false" //true 

  //배열타입
  let fff: number[] = [1,2,3,4,5, "안녕하세요"]
  let ggg: string[] = ["철수","영희","훈이"]
  let gimochi = ['철수','영희',1]

  //객체 타입
  interface IProfile {
    name: string
    age: number | string
    school: string
    hobby?: string
  }
  const profile: IProfile = {
    name : "철수",
    age : 8,
    school : "다람쥐 초등학교"
  }

  profile.name = "훈이"
  profile.age = "8살"

  //함수 타입
  function add(num1: number, num2: number , unit: string): string{
    return num1 + num2 + unit
  }
  const result = add(1000, 2000, "원")



}