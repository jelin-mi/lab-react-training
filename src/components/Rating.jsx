function Rating({
    children
}){
    return (
       <h1>
         {(Math.round(children) >= '0'&& Math.round(children) < '1') && '☆☆☆☆☆'}
         {(Math.round(children) >= '1'&& Math.round(children) < '2') && '★☆☆☆☆'}
         {(Math.round(children) >= '2'&& Math.round(children) < '3') && '★★☆☆☆'}
         {(Math.round(children) >= '3'&& Math.round(children) < '4') && '★★★☆☆'}
         {(Math.round(children) >= '4'&& Math.round(children) < '5') && '★★★★☆'}
         {(Math.round(children) >= '5') && '★★★★★'}
       </h1>
    );
}

export default Rating;