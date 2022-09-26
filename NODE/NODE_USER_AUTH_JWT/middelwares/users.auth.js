exports.register = async (req, res, next) => {
    const { User_Name, Password } = req.body
    if (Password.length < 6) {
        return res.status(400).json({ message: "Password less than 6 characters" })
    }
    try {
        await User.create({
            User_Name,
            Password,
        }).then(user =>
            res.status(200).json({
                message: "User successfully created",
                user,
            })
        )
    } catch (err) {
        res.status(401).json({
            message: "User not successful created",
            error: error.mesage,
        })
    }
}

// exports.login = async (req, res, next) => {
//     const { User_Name, Password } = req.body
//     // Check if username and password is provided
//     if (!User_Name || !Password) {
//         return res.status(400).json({
//             message: "Username or Password not present",
//         })
//     }
// }

exports.login = async (req, res, next) => {
    try {
      const user = await User.findOne({ User_Name, Password })
      if (!user) {
        res.status(401).json({
          message: "Login not successful",
          error: "User not found",
        })
      } else {
        res.status(200).json({
          message: "Login successful",
          user,
        })
      }
    } catch (error) {
      res.status(400).json({
        message: "An error occurred",
        error: error.message,
      })
    }
  }
  