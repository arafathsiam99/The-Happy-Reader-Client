import { useDeleteWishListMutation } from "../../redux/wishList/WishListApi";
import { useGetWishListQuery } from "../../redux/wishList/WishListApi";
import { ToastContainer, toast } from "react-toastify";
const WishList = () => {
  const token = JSON.parse(localStorage.getItem("book-user"))?.token;
  const { data } = useGetWishListQuery(token);
  // console.log(data);
  const [deleteWishList] = useDeleteWishListMutation();
  const handleWishList = async (id) => {
    const deleteData = await deleteWishList(id);
    toast(deleteData.data.msg);
  };
  return (
    <div className="flex wishList justify-center mx-10">
      <div className="overflow-x-auto w-full mx-10">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.user.map((res, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{res?.title}</td>
                <button
                  onClick={() => handleWishList(res._id)}
                  className="btn m-1 btn-sm btn-info"
                >
                  Delete
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default WishList;
