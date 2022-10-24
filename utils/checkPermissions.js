import { UnAuthenticatedError } from "../errors/index.js";

const checkPermissions = (requestUser, resourceUserId) => {
    if (requestUser.userId === resourceUserId.toString()) return;
  
    throw new UnAuthenticatedError('Not authorized to acces this route')
};

export default checkPermissions;
