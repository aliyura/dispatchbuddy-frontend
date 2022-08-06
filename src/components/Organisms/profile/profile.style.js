import styled from "styled-components";

export const ProfileStyle = styled.div`
    // border: 2px solid red;
    padding: 3rem 24rem;
    .header_profile{
        h1{
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
            margin: 1rem auto;
            text-align: center;
            color: #21334F;
        }
    }
    .avatar_wrap{
        display: flex;
        justify-content: center;
        align-items: center;
        // border: 2px solid blue;
        box-shadow: 0px 0px 5px rgb(200, 200, 200);
        background: rgba(88, 10, 255, 0.05);
        padding: 2rem 1rem;
        text-align: center;
    }
    .list_action{
        .list_action_tree{
            text-decoration: none;
            list-style: none;
            // border: 1px solid yellow;
            li{
                padding: 1rem 0;
                cursor: pointer;
                span{
                    margin-left: 1rem;
                }
                &:hover{
                    background: rgba(88, 10, 255, 0.05);
                }
            }
        }
    }
`