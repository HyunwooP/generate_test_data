export const errorHendler = (e) => {
    throw new Error(e);
};

export const finishHendler = (m = "end") => m;