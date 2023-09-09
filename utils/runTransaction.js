const mongoose = require('mongoose');

exports.runInTransaction = async (callback) => {
  const session = await mongoose.startSession();

  session.startTransaction();

  try {

    await callback(session);

    await session.commitTransaction();

  } catch (error) {

    await session.abortTransaction();

    throw error;

  } finally {

    session.endSession();

  }
};