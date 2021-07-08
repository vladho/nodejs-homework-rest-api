const currentUser = async (req, res, next) => {
  try {
    const { user } = req;

    if (!user) {
      return res.status(401).json({
        status: "Unauthorized",
        code: 401,
        message: "Not authorized",
      });
    }
    const currentUser = {
      email: user.email,
      subscription: user.subscription,
    };

    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        currentUser,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = currentUser;
