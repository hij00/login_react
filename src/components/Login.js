import { useForm } from "react-hook-form";
import styled from "styled-components";

const userDb = {
  dbUsername: "aaa",
  dbPw: "123123123",
  //   관리자도 비밀번호 볼 수 없음, hash처리(믹싱, 비밀번호 칠때마다 믹싱해서 원래 입력갓과 비교)
};

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  border: 1px solid salmon;
  align-items: center;
  padding: 80px 50px;
  border-radius: 10px;
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    input {
      all: unset;
      border: 1px solid salmon;
      padding: 10px 10px;
      margin-bottom: 15px;
      border-radius: 10px;
    }
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 30px;
  color: salmon;
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  padding: 10px;
  text-align: center;
  background-color: lightblue;
  box-sizing: border-box;
  color: salmon;
  border-radius: 10px;
  opacity: ${(props) => props.opacity};
  cursor: ${(props) => props.cursor};
  transition: 0.5s;
`;

const ErrorM = styled.span`
  font-weight: 900;
  color: salmon;
  margin-bottom: 15px;
`;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setError,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = () => {
    // console.log("버튼 눌렀음");
    // onsubmit이 작동하는지 검사
    const { email, password } = getValues();
    // console.log(username, password);
    const { dbUsername, dbPw } = userDb;
    // console.log(dbUsername, dbPw);

    if (email !== dbUsername) {
      setError("usernameResult", { message: "아이디가 일치하지 않습니다" });
    }

    if (password !== dbPw) {
      setError("passwordResult", { message: "비밀번호가 일치하지 않습니다" });
    }
    // 아이디와 비밀번호 둘다 일치해야함 => 조건을 두개 설정

    if (email === dbUsername && password === dbPw) {
      alert("로그인 되었습니다");
    }
  };
  console.log(errors);

  // 빈값 {}이면 아무 오류 없음
  // 아이디랑 비밀번호 입력안하면 에러메세지 뜸
  // 에러메세지 따로 작성 required, 메세지에 내용이 담김,
  // 보여주는건 따로 스타일 적용해야함
  return (
    <Wrap>
      <LoginWrap>
        <Title>Login</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email", {
              required: "아이디는 필수입니다",
              minLength: {
                value: 3,
                message: "아이디는 3자리 이상 작성해야합니다",
              },
            })}
            type="text"
            placeholder="이메일을 입력해주세요"
          ></input>

          {errors?.email?.message && <ErrorM> {errors?.email?.message}</ErrorM>}
          {errors?.usernameResult?.message && (
            <ErrorM> {errors?.usernameResult?.message}</ErrorM>
          )}

          {/* 에러에 메세지가 있다면 보여주도록 */}
          {/* {errors && errors.email && errors.email.message} */}
          {/* 에러가 있다면 메세지를 보여주기 */}
          <input
            {...register("password", {
              required: "비밀번호는 필수입니다",
              minLength: {
                value: 8,
                message: "비밀번호는 8자리 이상 작성해야합니다",
              },
              //   pattern: {
              //     value: /^(?=.*\d)(?=.*[a-zA-z])[0-9a-zA-z]{8,16}$/,
              //     message:
              //       "비밀번호는 8자리 이상, 문자와 숫자의 조합으로 작성해야합니다",
              //   },
            })}
            type="password"
            // 클릭했을때 텍스트로 타입변경
            placeholder="비밀번호를 입력해주세요"
          ></input>

          {errors?.email?.message && (
            <ErrorM>{errors?.password?.message}</ErrorM>
          )}
          <Button
            opacity={isValid ? 1 : 0.5}
            cursor={isValid ? "pointer" : "auto"}
            // border={isValid ? }
          >
            로그인
          </Button>
        </form>
      </LoginWrap>
    </Wrap>
  );
};

// useForm 여러 유효성 검사를 간단하게

// ... 분해구조할당(스프레드)

// required : true => 필수입니다(내용을 필수로 입력)
// 필수가 아닌 값에는 넣으면 안됨(회원가입 빈칸)

// 버튼 => submit

// handleSubmit(실행할 함수, 이름 아무거나) : submit 함수

// formstate: {} => 유효성검사

// 값이 여러개일때 객체 처리, 옵션 추가

// 객체 안에 메세지 적을 수 있음 (메세지 아까 에러 메세지랑 연동됨)

// 정규식 표현..? regex / regexp => 자주 쓰는 건 미리 나와있음! (비밀번호 정규식 패턴)

// 인스타 해시태그도 정규식 사용

// isValid 유효한지 아닌지 유효성 검사 => false / true => 프롭스로 전달

// getValues : input의 입력값을 가져옴

// error에 메세지 변경할때 => setError (alert 창말고 글이 뜨게)

// 클리어에러 해보기
// 회원가입 해보기
// 클릭했을때 비밀번ㅇ호 보이게
