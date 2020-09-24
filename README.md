## Generate Test Data
```
2020.09.24
Author: 박현우
테스트 데이터 밀어넣기 귀찮아서 만들어 봄
```

# 현재 개발 진행 중
```
1. 지원
    - Mongo
    - Redis
    - Mysql

2. 고려사항
    - Redis 모듈에 옵션을 주어 hash, list형태 처리

3. 개선해야할 점
    - mongo, mysql의 date 타입 catch
    - 관계형도 가능하게끔 데이터 집어넣고 싶다.
    - 뭔가 불편함

```

```
1. Mongo option
    {
        collection: string / 테스트 데이터를 밀어넣을 타겟
        url: string / 데이터베이스 endpoint
        count: 테스트 데이터 갯수
        option: mongo connect option
    }

2. Redis option
    {
        host: string / 데이터베이스 endpoint
        port: number / 데이터베이스 endpoint 포트
        count: 테스트 데이터 갯수
    }

3. Mysql option
    {
        host: string / 데이터베이스 endpoint
        port: number / 데이터베이스 endpoint 포트
        user: string / 유저 아이디
        password: string / 유저 패스워드
        database: string / endpoint
        table: / 테스트 데이터를 밀어넣을 타겟
    }

3. 필수값 정의
    Mongo - collection
    Redis - host, port
    Mysql - host, port, user, password, database, table

4. 기본값 정의
    Mongo - url (mongodb://localhost:27017), count
    Redis - count
    Mysql - count

5. 참고 사항
    Mysql & Mongo - 스키마를 꼭 서술할 것.

```