export default function User({ datas }) {
  return (
    <div>
      {datas.map((data) => {
        console.log(data.age);
        return (
          <div>
            <h3>{data.username}</h3>
            <h3>{data.age}</h3>
          </div>
        );
      })}
    </div>
  );
}
