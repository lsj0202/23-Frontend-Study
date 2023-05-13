import { useState } from "react";
import * as A from "../../../styles/emotion";
import { useMutation,gql } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput : CreateBoardInput!){
    createBoard(createBoardInput: $createBoardInput){
      _id
    }
  }
`

export default function BoardWriteUI() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if(event.target.value !== ""){
      setWriterError("")
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if(event.target.value !== ""){
      setPasswordError("")
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if(event.target.value !== ""){
      setTitleError("")
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if(event.target.value !== ""){
      setContentsError("")
    }
  };

  const onClickSubmit = async () => {
    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (!title) {
      setTitleError("제목을 입력해주세요.");
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요.");
    }
    if (writer && password && title && contents) {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents
          }
        }
      })
      console.log(result)
    }
  };

  return (
    <A.Wrapper>
      <A.Title>게시글 등록</A.Title>
      <A.WriterWrapper>
        <A.InputWrapper>
          <A.Label>작성자</A.Label>
          <A.Writer type="text" placeholder="이름을 적어주세요." onChange={onChangeWriter} />
          <A.Error>{writerError}</A.Error>
        </A.InputWrapper>
        <A.InputWrapper>
          <A.Label>비밀번호</A.Label>
          <A.Password type="password" placeholder="비밀번호를 작성해주세요." onChange={onChangePassword} />
          <A.Error>{passwordError}</A.Error>
        </A.InputWrapper>
      </A.WriterWrapper>
      <A.InputWrapper>
        <A.Label>제목</A.Label>
        <A.Subject type="text" placeholder="제목을 작성해주세요." onChange={onChangeTitle} />
        <A.Error>{titleError}</A.Error>
      </A.InputWrapper>
      <A.InputWrapper>
        <A.Label>내용</A.Label>
        <A.Contents placeholder="내용을 작성해주세요." onChange={onChangeContents} />
        <A.Error>{contentsError}</A.Error>
      </A.InputWrapper>
      <A.InputWrapper>
        <A.Label>주소</A.Label>
        <A.ZipcodeWrapper>
          <A.Zipcode placeholder="07250" />
          <A.SearchButton>우편번호 검색</A.SearchButton>
        </A.ZipcodeWrapper>
        <A.Address />
        <A.Address />
      </A.InputWrapper>
      <A.InputWrapper>
        <A.Label>유튜브</A.Label>
        <A.Youtube placeholder="링크를 복사해주세요." />
      </A.InputWrapper>
      <A.ImageWrapper>
        <A.Label>사진첨부</A.Label>
        <A.UploadButton>+</A.UploadButton>
        <A.UploadButton>+</A.UploadButton>
        <A.UploadButton>+</A.UploadButton>
      </A.ImageWrapper>
      <A.OptionWrapper>
        <A.Label>메인설정</A.Label>
        <A.RadioButton type="radio" id="youtube" name="radio-button" />
        <A.RadioLabel htmlFor="youtube">유튜브</A.RadioLabel>
        <A.RadioButton type="radio" id="image" name="radio-button" />
        <A.RadioLabel htmlFor="image">사진</A.RadioLabel>
      </A.OptionWrapper>
      <A.ButtonWrapper>
        <A.SubmitButton onClick={onClickSubmit}>등록하기</A.SubmitButton>
      </A.ButtonWrapper>
    </A.Wrapper>
  );
}
