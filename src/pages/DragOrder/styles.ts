import styled from 'styled-components';

export const Container = styled.div`
  width: 370px;
  margin: 0 auto;
  background: pink;
  padding: 20px;

  .list {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin: 0;
    padding: 0;
  }

  .list-item {
    width: 100px;
    height: 100px;
    border: 1px solid #999;
    background: #fff;
    line-height: 100px;
    text-align: center;
    list-style: none;
    user-select: none;
    border-radius: 4px;
    transition: transform 0.3s;
    cursor: pointer;

    &:hover {
      border-color: #666;
      transform: scale(1.01);
    }
  }

  .active {
    background: skyblue;
  }
`;
