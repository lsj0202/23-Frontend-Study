import { IProfile } from './inedex';

export interface IProfile {
  name: string
  age: number
  school: string
  hobby?: string
}

interface IProfile2{
  name : string
  age : number
}

// 1. Partial 타입
type aaa = Partial<IProfile>

// 2. Required 타입
type bbb = Required<IProfile>

// 3. Pick 타입
type ccc = Pick<IProfile, "name" | "age">

// 4. Omit 타입
type ddd = Omit<IProfile, "school">

//5. Record 타입
type eee = "철수" | "영희" | "훈이" //union 타입
let child: eee = "영희"
let child2: string = "바나나"

type fff = Record<eee, IProfile> // Record 타입

//6. 객체의 key들로 Union타입 만들기
type ggg = keyof IProfile // "name" | "age" | "school" | "hobby" 
let myProfile: ggg = "hobby"

//7. 타입과 인터페이스의 차이  =>  선언병합으로 추가됨
export interface IProfile{ // interface는 선언병합 가능
  candy: number
}

let profile: Pick<IProfile, "candy"> = {
  candy: 10
}

let pro: Partial<IProfile> = {
  candy: 10
}
