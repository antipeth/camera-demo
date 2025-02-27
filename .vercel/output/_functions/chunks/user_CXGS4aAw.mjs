const user = new Proxy({"src":"/_astro/user.SmeuEmFM.jpg","width":385,"height":363,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/atp/Programs/big-create-front/camera-demo/src/assets/user.jpg";
							}
							
							return target[name];
						}
					});

export { user as u };
