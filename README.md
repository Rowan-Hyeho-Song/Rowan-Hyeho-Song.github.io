### 개발 시
- <code>dev</code> branch로 무조건 checkout 한다음에 작업
- <code>dev</code>에서 반영할 사항이 있을 경우 <code>main</code>으로 merge
- 급한 수정 사항이 필요할 경우 <code>hotfix</code> branch를 활용


### 빌드할 때
- <code>main</code> branch로 checkout 한 뒤 <code>npm run build</code>


### 페이지 배포할 때
- 빌드를 무조건 선 진행
- <code>npm run deploy</code> 실행
