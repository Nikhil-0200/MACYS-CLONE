import { Puff } from "react-loader-spinner"

const Loading = ()=>{
return(
    <section>
        <Puff
  visible={true}
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />

    </section>
)
}

export default Loading