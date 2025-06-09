use features::{SintExt, StreamExt};
use tokio::net::TcpListener;
use tokio_tungstenite::accept_async;
use tungstenite::protocol::Message;

pub async fn run_ws_server() {
    //Start a TCP listener and bind it to port 9001
    let try_socket = TcpListener::bind("127.0.0.1:9001").await;
    let listener = match try_socket {
        Ok(s) => s,
        Err(e) => {
            eprintln!("Failed to bind: {}", e);
            return;
        }
    };

    printls!("Succesfully listening on port 9001!");

    //loop still runs while the listener does not throw an error, if the listener is ok, it will return variables stream and _addr, which are usable in the loop.
    while let Ok((stream, _addr)) = listener.accept().await {}
}
