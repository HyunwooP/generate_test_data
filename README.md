## Generate Test Data
```
2020.09.24
Author: 박현우
```

# 테스트 데이터 밀어넣기 귀찮아서 만들어 봄
# 현재 개발 진행 중

```
1. 지원
    - Mongo
    - Redis

2. 고려사항
    - Redis 모듈에 옵션을 주어 hash, list형태 처리

3. 추가사항
    - mysql
    - els는 금전적 여유가 생기면 추가해보자.
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

3. 필수값 정의
    Mongo - collection
    Redis - host, port

4. 기본값 정의
    Mongo - url (mongodb://localhost:27017), count
    Redis - count

5. 참고 사항
    Mongo - 스키마를 꼭 서술할 것.
```